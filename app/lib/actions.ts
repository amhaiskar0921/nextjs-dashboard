'use server'; // All exported funcitons from this file will be Server Actions that can be imported from client components
 
export async function createInvoice(formData: FormData) {
    console.log('Form')
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}