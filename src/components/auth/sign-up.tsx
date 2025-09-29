import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signUp } from "@/lib/auth-client";

const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least three characters long"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "The password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "The password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not much",
    path: ["confirmPassword"],
  });

type registerFormValues = z.infer<typeof registerSchema>;

interface RegisterFormProps{
  onSuccess?: ()=> void
}
const RegisterForm = ({onSuccess}: RegisterFormProps) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<registerFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSignUpSubmit = async(values: registerFormValues)=>{
    setLoading(true)

    try {
      const { error } = await signUp.email({
        name: values.name,
        email: values.email,
        password: values.password
      })
      
      if(error){
        toast('Unexpected error')
        console.log(error)
        return
      }

      toast('Your account was created successfully, please Login')

      if(onSuccess){
        onSuccess()
      }
    } catch (e) {
      console.log(e)
      toast(`${e}`)
      return
      
    }finally{
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form  className="space-y-4" onSubmit={form.handleSubmit(onSignUpSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User name</FormLabel>
              <FormControl>
                <Input placeholder="Please enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Please enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Please enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="Please confirm password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
