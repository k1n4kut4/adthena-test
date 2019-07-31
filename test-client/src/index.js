import '../styles/styles.css'

const  printMessage = async (message = 'Adthena') => {
  const response = await fetch(`/api/status?message=${message}`);
  const json = await response.json();

  document.getElementById("app").innerHTML = `
    <h1>Hello ${json.message}!</h1>
    <div>
    This message was generated using data from the status endpoint.
    </div>
  `;
};

printMessage();


