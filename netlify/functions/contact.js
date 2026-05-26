exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "All fields are required" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      message: `Thank you ${name}! Your message has been received. Jeremiah will get back to you at ${email} soon.`
    })
  };
};