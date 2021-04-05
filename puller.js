fetch(`/tables`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservations.data)
  })
      .then((response) => response.json())
      .then((data) => {
          console.log(reservations.data);
          const { name, id, whatever } = data;
    });