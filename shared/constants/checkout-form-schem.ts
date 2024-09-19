import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "The first name must be at least 2 characters long" }),
  lastName: z
    .string()
    .min(2, { message: "The last name must be at least 2 characters long" }),
  email: z.string().email({ message: "The email must be with @" }),
  phone: z.string().min(10, { message: "The phone must contain only numbers" }),
  address: z.string().min(5, { message: "Enter the correct address" }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
