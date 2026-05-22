'use server'

export async function submitBooking(formData: FormData) {
  try {
    const name = formData.get('name');
    const email = formData.get('email');
    const date = formData.get('date');
    const guests = formData.get('guests');

    // මෙතන තමයි අපි ඉස්සරහට Email යවන කෝඩ් එක දාන්නේ (Resend API එකෙන්)
    console.log(`New Booking Received from ${name} (${email}) for ${guests} guests on ${date}`);

    // Form එක process වෙන්න තත්පරයක් වෙලා ගන්නවා වගේ පෙන්නන්න (Simulation)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: "Booking request sent successfully!" };
  } catch (error) {
    return { success: false, message: "Something went wrong." };
  }
}