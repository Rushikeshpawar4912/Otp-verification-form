 // Generate a random 6-digit OTP
 function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  // Function to send OTP (for demonstration purposes)
  function sendOTP() {
    const otp = generateOTP();
    alert("Your OTP is: " + otp);
    return otp;
  }

  // Function to verify OTP
  function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value;
    const otpSent = sendOTP(); 
    if (enteredOTP === otpSent) {
      document.getElementById("message").innerText = "invalid OTP Verified!";
    } else {
      document.getElementById("message").innerText = "OTP Verified!.Enter Your Otp ";
    }
  }