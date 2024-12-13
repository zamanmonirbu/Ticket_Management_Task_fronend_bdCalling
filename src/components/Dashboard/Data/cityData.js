export const cities = [
  "Dhaka",
  "Chittagong",
  "Khulna",
  "Rajshahi",
  "Sylhet",
  "Barishal",
  "Rangpur",
];


export const ticketPrices = {
  Dhaka: {
    Chittagong: 500,
    Khulna: 450,
    Rajshahi: 400,
    Sylhet: 350,
    Barishal: 300,
    Rangpur: 550,
  },
  Chittagong: {
    Dhaka: 500,
    Khulna: 600,
    Rajshahi: 700,
    Sylhet: 400,
    Barishal: 350,
    Rangpur: 800,
  },
  Khulna: {
    Dhaka: 450,
    Chittagong: 600,
    Rajshahi: 500,
    Sylhet: 700,
    Barishal: 200,
    Rangpur: 750,
  },
  Rajshahi: {
    Dhaka: 400,
    Chittagong: 700,
    Khulna: 500,
    Sylhet: 650,
    Barishal: 600,
    Rangpur: 300,
  },
  Sylhet: {
    Dhaka: 350,
    Chittagong: 400,
    Khulna: 700,
    Rajshahi: 650,
    Barishal: 550,
    Rangpur: 600,
  },
  Barishal: {
    Dhaka: 300,
    Chittagong: 350,
    Khulna: 200,
    Rajshahi: 600,
    Sylhet: 550,
    Rangpur: 700,
  },
  Rangpur: {
    Dhaka: 550,
    Chittagong: 800,
    Khulna: 750,
    Rajshahi: 300,
    Sylhet: 600,
    Barishal: 700,
  },
};

  
  // Centralized bus details for each city
  export const busDetails = {
    "Dhaka": {
      busName: "City Bus Express",
      departureTime: "10:00 AM",
      availableSeats: 50,
      price: "$30",
    },
    "Barishal": {
      busName: "LA City Shuttle",
      departureTime: "11:30 AM",
      availableSeats: 40,
      price: "$35",
    },
    "Rajshahi": {
      busName: "Windy City Bus",
      departureTime: "9:00 AM",
      availableSeats: 60,
      price: "$28",
    },
    "Sylhet": {
      busName: "Houston Express",
      departureTime: "8:30 AM",
      availableSeats: 45,
      price: "$40",
    },
    "Khulna": {
      busName: "Phoenix Roadrunner",
      departureTime: "7:00 AM",
      availableSeats: 55,
      price: "$25",
    },
  };
  