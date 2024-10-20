import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { config } from "../../config.js";

const supabase = createClient(config.supabaseUrl, config.supabaseKey);

document.getElementById("btn-logout").addEventListener("click", async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  } else {
    window.location.href = "/pages/Login/";
  }
});

const checkUserSession = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log(error);
    window.location.href = "/pages/Login/";
  } else if (user) {
    document.getElementById(
      "welcome-message"
    ).textContent = `Bem-vindo, ${user.email}!`;
  }
};

window.onload = checkUserSession;
