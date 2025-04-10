function myMenuFunction() {
    var i = document.getElementById("navMenu");
  
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   /*...........................*/
   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");
   var z = document.getElementById("hero");
  
  
   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
       z.style.opacity = 0;
   }
  
   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className += "white-btn";
       y.style.opacity = 1;
       z.style.opacity =0;
   }
  
   function notallowed(){
      alert("Please finish the questions,you can't go to other page during quiz time.")
   }
  
   // Function to register user
  function registerUser(event) {
  
      event.preventDefault();
      console.log("registerUser function called");
      // Get user input
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
  
      // Store user data in local storage
      localStorage.setItem("username_" + email, username);
      localStorage.setItem("password_" + email, password);
  
      // Redirect to login form
      window.location.href = "loginup.html";
  }function checkLoginStatus(event) {
      event.preventDefault();
      loginUser();
  }
  
  function loginUser() {
      var emailInput = document.getElementById("email");
      var passwordInput = document.getElementById("password");
  
      if (emailInput && passwordInput) {
          var email = emailInput.value;
          var password = passwordInput.value;
  
          // Retrieve user data from local storage
          var storedUsername = localStorage.getItem("username_" + email);
          var storedPassword = localStorage.getItem("password_" + email);
  
          // Check if user exists and password is correct
          if (storedUsername && storedPassword === password) {
              console.log("Login successful!");
              // Update local storage with email and password
              localStorage.setItem("email", email);
              localStorage.setItem("password", password);
  
              // set login to test
              localStorage.setItem("loggedIn","true");
  
              // Redirect to index.html
              window.location.href = "index.html";
  
              // Display success message
              alert("Login successful!");
          } else {
              console.log("Invalid email or password");
              // Display error message
              alert("Invalid email or password");
          }
      } else {
          console.error("Email or password input field not found");
      }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      const authButton = document.getElementById('authButton');
      const createacc = document.getElementById("createacc");
      
      function updateAuthUI() {
          if (localStorage.getItem('loggedIn') === 'true') {
              authButton.innerHTML = '<a href="#"><button class="btn white-btn" onclick="handleLogout()">Sign Out</button></a>';
              authButton.onclick = handleLogout;
              createacc.innerHTML = '<a href="quizzone.html" style=" text-decoration:none;"><span><button class="btn white-btn "" >Answer Quizzes</button> </span></a>';
              
              
          } else {
              authButton.innerHTML = '<a href="loginup.html">  <button class="btn white-btn">Sign In</button></a>';
              createacc.innerHTML = '<a href="register.html" style=" text-decoration:none;"><span><button class="btn white-btn "" >Create Account</button> </span></a>';
             
              authButton.onclick = () => window.location.href = 'loginup.html';
          }
      }
      
      function handleLogout() {
          
          localStorage.removeItem('loggedIn');
          
          window.location.href = "index.html"; // Redirect to homepage
      
      }
      updateAuthUI();
    });
    document.addEventListener('DOMContentLoaded', () => {
      
      const kagyi= document.getElementById("kagyi");
      const khakway= document.getElementById("khakway");
      const nga= document.getElementById("nga");
      const salain= document.getElementById("salain");
      const ta= document.getElementById("ta");
      const nange= document.getElementById("nange");
      const pasouk= document.getElementById("pasouk");
      const bakone= document.getElementById("bakone");
      const ma= document.getElementById("ma");
      const rakout= document.getElementById("rakout");
      const la= document.getElementById("la");
      const tha= document.getElementById("tha");
      const aha= document.getElementById("aha");
      const yawaha= document.getElementById("yawaha");
      const gatonya= document.getElementById("gatonya");
      const ddpf= document.getElementById("ddpf");
      const riddles= document.getElementById("riddles");
      const lies= document.getElementById("lies");
         
    
  
  
      function updateAuthUI() {
          if (localStorage.getItem('loggedIn') === 'true') {
              kagyi.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="kagyi"  >ဖြေဆိုရန်</button ></a>';
              khakway.innerHTML = ' <a href="quizdescription.html"><button class="abtn"name="tablename" value="khakway"   >ဖြေဆိုရန်</button ></a>';
              nga.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="nga"  >ဖြေဆိုရန်</button ></a>';
              salain.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="salain"  >ဖြေဆိုရန်</button ></a>';
              ta.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="ta"  >ဖြေဆိုရန်</button ></a>';
              hta.innerHTML= ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="hta"  >ဖြေဆိုရန်</button ></a>';
              nange.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="nange"   >ဖြေဆိုရန်</button ></a>';
              pasouk.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="pasouk"  >ဖြေဆိုရန်</button ></a>';
              bakone.innerHTML = ' <a href="quizdescription.html"><button class="abtn"  name="tablename" value="bakone" >ဖြေဆိုရန်</button ></a>';
              ma.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="ma"  >ဖြေဆိုရန်</button ></a>';
              rakout.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="rakout"  >ဖြေဆိုရန်</button ></a>';
              la.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="la" >ဖြေဆိုရန်</button ></a>';
              tha.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="tha"  >ဖြေဆိုရန်</button ></a>';
              aha.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="aha"  >ဖြေဆိုရန်</button ></a>';
              yawaha.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="yawaha" >ဖြေဆိုရန်</button ></a>';
              gatonya.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="gatonya"  >ဖြေဆိုရန်</button ></a>';
              ddpf.innerHTML = ' <a href="quizdescription.html"><button class="abtn"name="tablename" value="ddpf"   >ဖြေဆိုရန်</button ></a>';
              riddles.innerHTML = ' <a href="quizdescription.html"><button class="abtn"name="tablename" value="riddles"  >ဖြေဆိုရန်</button ></a>';
              lies.innerHTML = ' <a href="quizdescription.html"><button class="abtn" name="tablename" value="lies"  >ဖြေဆိုရန်</button ></a>';
              
          } else {
              kagyi.innerHTML='<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              khakway.innerHTML='<a href="alert.html"><button class="abtn"   >ဖြေဆိုရန်</button ></a> ' ;
              nga.innerHTML='<a href="alert.html"><button class="abtn"   >ဖြေဆိုရန်</button ></a> ' ;
              salain.innerHTML='<a href="alert.html"><button class="abtn" >ဖြေဆိုရန်</button ></a> ' ;
              ta.innerHTML='<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              hta.innerHTML='<a href="alert.html"><button class="abtn" >ဖြေဆိုရန်</button ></a> ' ;
              nange.innerHTML='<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              pasouk.innerHTML='<a href="alert.html"><button class="abtn" >ဖြေဆိုရန်</button ></a> ' ;
              bakone.innerHTML='<a href="alert.html"><button class="abtn" >ဖြေဆိုရန်</button ></a> ' ;
              ma.innerHTML='<a href="alert.html"><button class="abtn"   >ဖြေဆိုရန်</button ></a> ' ;
              rakout.innerHTML='<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              la.innerHTML='<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              tha.innerHTML = '<a href="alert.html"><button class="abtn" >ဖြေဆိုရန်</button ></a> ' ;
              aha.innerHTML ='<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              yawaha.innerHTML = '<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              gatonya.innerHTML ='<a href="alert.html"><button class="abtn"   >ဖြေဆိုရန်</button ></a> ' ;
              ddpf.innerHTML = '<a href="alert.html"><button class="abtn"   >ဖြေဆိုရန်</button ></a> ' ;
              riddles.innerHTML = '<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              lies.innerHTML = '<a href="alert.html"><button class="abtn"  >ဖြေဆိုရန်</button ></a> ' ;
              
          }
      }
  
      
  
  
   
  
    function setTableName(tablename) {
      localStorage.setItem("tablename", tablename);
      updateQuizType(tablename);
    }
  
  kagyi.addEventListener('click', () => setTableName("kagyi"));
  khakway.addEventListener('click', () => setTableName("khakway"));
  nga.addEventListener('click', () => setTableName("nga"));
  salain.addEventListener('click', () => setTableName("salain"));
  ta.addEventListener('click', () => setTableName("ta"));
  hta.addEventListener('click',  () => setTableName("hta"));
  nange.addEventListener('click', () => setTableName("nange"));
  pasouk.addEventListener('click', () => setTableName("pasouk"));
  bakone.addEventListener('click', () => setTableName("bakone"));
  ma.addEventListener('click', () => setTableName("ma"));
  rakout.addEventListener('click', () => setTableName("rakout"));
  la.addEventListener('click', () => setTableName("la"));
  tha.addEventListener('click', () => setTableName("tha"));
  aha.addEventListener('click', () => setTableName("aha"));
  yawaha.addEventListener('click', () => setTableName("yawaha"));
  gatonya.addEventListener('click', () => setTableName("gatonya"));
  ddpf.addEventListener('click', () => setTableName("ddpf"));
  riddles.addEventListener('click', () => setTableName("riddles"));
  lies.addEventListener('click', () => setTableName("lies"));
  
  
  updateAuthUI();
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
     
      const type = document.getElementById("checktype");
      
      function updateAuthUI() {
         
          switch ( localStorage.getItem('tablename') ) {
              case "kagyi":   type.innerHTML='<span><a href="kagyi.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "khakway": type.innerHTML='<span><a href="khakway.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "nga":     type.innerHTML='<span><a href="nga.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "salain":  type.innerHTML='<span><a href="salain.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "ta":      type.innerHTML='<span><a href="ta.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "hta":     type.innerHTML='<span><a href="hta.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "nange":   type.innerHTML='<span><a href="nange.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "pasouk":  type.innerHTML='<span><a href="pasouk.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "bakone":  type.innerHTML='<span><a href="bakone.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "ma":      type.innerHTML='<span><a href="ma.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "rakout":  type.innerHTML='<span><a href="rakout.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "la":      type.innerHTML='<span><a href="la.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "tha":     type.innerHTML='<span><a href="tha.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "aha":     type.innerHTML='<span><a href="aha.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
               case "yawaha":  type.innerHTML='<span><a href="yawaha.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
              case "gatonya": type.innerHTML='<span><a href="gatonya.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
               case "ddpf":    type.innerHTML='<span><a href="ddpf.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
               case "riddles": type.innerHTML='<span><a href="riddles.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
               case "lies":    type.innerHTML='<span><a href="lies.html" ><button class="btn white-btn">Let Start</button></a></span>';break;
  
      }
  }
     
      updateAuthUI();
    });
  
  
  