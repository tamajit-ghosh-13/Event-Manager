

async function testSignup() {
  const email = `testuser_${Date.now()}@example.com`;
  const password = 'Password123!';
  const name = 'Test User';
  
  console.log(`Testing signup with email: ${email}`);
  
  try {
    const res = await fetch('http://localhost:3000/api/auth/sign-up/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify({ email, password, name })
    });
    
    const text = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Response: ${text}`);
    
    if (!res.ok) {
      console.error('Signup failed!');
      process.exit(1);
    } else {
      console.log('Signup succeeded!');
    }
  } catch (error) {
    console.error('Error during fetch:', error);
    process.exit(1);
  }
}

testSignup();
