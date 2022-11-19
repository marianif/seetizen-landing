const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
const GROUP_ID = "72202517914584314"

export const createSubscriber = async (email) => {
  const BASE_URL = `https://connect.mailerlite.com/api/subscribers/`

  const body = {
    email,
    groups: [GROUP_ID],
  }

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${MAILERLITE_API_KEY}`,
    },
    body: JSON.stringify(body),
  }

  try {
    const { ok } = await fetch(BASE_URL, config)
    return ok
  } catch (error) {
    console.log(error)
  }
}
