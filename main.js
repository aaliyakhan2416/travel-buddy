
// const apikey='AIzaSyANFigGuE9PZ9mxnOt6UJeCKj3K5U3TOjQ'


let cityName = document.querySelector("#city")
let days = document.querySelector("#days")
let budget = document.querySelector("#budget")
let box = document.querySelector('#box')
let form = document.querySelector('form')
let p = document.querySelector('p')


const getAiExplaination = async (e) => {
e.preventDefault()

p.innerText="Thinking......."

  const API_KEY  = 'AIzaSyC2qILO6_t_HMU9DPyjyKGgQ7OvZ91eXOg'; // add your API key here

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `SYSTEM ROLE:
You are a professional travel itinerary planner.

TASK:
Generate a complete, realistic travel itinerary using the provided inputs.

INPUT PARAMETERS:
- ${cityName.value}
-${days.value}
- ${budget .value}

INSTRUCTIONS:
1. Create a DAY-WISE itinerary (Day 1, Day 2, etc.).
2. For each day, divide the plan into:
   - Morning
   - Afternoon
   - Evening
3. For every place mentioned, include:
   - Approximate distance from the previous location (in km)
   - Approximate travel time
   - Recommended mode of transport
4. List all major and budget-friendly places to visit in the city.
5. Ensure the itinerary strictly fits within the given budget.

BUDGET DETAILS:
Provide a clear budget breakdown including:
- Accommodation (budget stay)
- Food (daily estimate)
- Local transportation
- Entry fees / activities
- Miscellaneous expenses

ADDITIONAL REQUIREMENTS:
- Suggest budget-friendly stay areas or hotels
- Suggest affordable local food options and famous dishes
- Add practical travel tips and money-saving tips
- Mention the TOTAL ESTIMATED COST at the end

FORMAT RULES:
- Use clear section headings
- Use bullet points and tables where helpful
- Keep language simple and concise
- No emojis
- No unnecessary explanations
- Output must be clean and well-formatted for UI display

OUTPUT STRUCTURE:
Title
Trip Overview
Day-wise Travel Plan
Places to Visit with Distance & Transport
Budget Breakdown Table
Stay Suggestions
Food Suggestions
Travel Tips
Total Estimated Cost
`
              }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();
  // console.log();
p.innerText=data.candidates[0].content.parts[0].text
};

// function call
// getAiExplaination();


form.addEventListener('submit',getAiExplaination)