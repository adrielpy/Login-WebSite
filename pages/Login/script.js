import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { config } from "../../config.js";

const supabase = createClient(config.supabaseUrl, config.supabaseKey);

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error);
  } else {
    window.location.href = "/pages/Home/";
    console.log("sucesso!");
  }
});

const btnLoginGoogle = document.getElementById("btn-login-google");

btnLoginGoogle.addEventListener("click", async () => {
  const { user, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
  } else {
    console.log("Login com Google: sucesso!");
  }
});
