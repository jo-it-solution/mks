
import React, { useState } from 'react';
import { TextInput, Textarea, Button, Group, Text , Flex} from '@mantine/core';
import emailjs from 'emailjs-com';
import classes from './Email.module.css'; 


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true); 
    setSuccess(false); 
    setError(null); 

    try {
      
      const response = await emailjs.send(
        'service_td4xj2c',   
        'template_tqqa8w4',  
        {
          name: formData.name,        
          email: formData.email,     
          subject: formData.subject, 
          message: formData.message,   
        },
        'p74s_m7qgDrJxzN6P' 
      );

      
      if (response.status === 200) {
        setSuccess(true); 
        
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
     
      console.error("Error sending email:", err); 
      setError(err instanceof Error ? err.message : 'An unexpected error occurred'); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <form onSubmit={sendEmail} className={classes.form}>
      <Flex gap={20} mb={20} mt={20}  >
      <TextInput
        required
        placeholder='Your Name'
        name="name"
        style={{width:"15rem" , border:" 0.000001px solid rgb(187, 184, 184)", borderRadius:"0.3rem"}}
        value={formData.name}
        onChange={handleChange}
      />
      <TextInput
        required
        placeholder='Your Email'
        type="email"
        style={{width:"15rem", border:" 0.000001px solid rgb(187, 184, 184)", borderRadius:"0.3rem"}}
        name="email" 
        value={formData.email}
        onChange={handleChange}
      /></Flex>
      <TextInput
        required
        placeholder='Subject'
        name="subject"
        style={{marginBottom:"1.1rem" ,border:" 0.000001px solid rgb(187, 184, 184)", borderRadius:"0.3rem"}}
        value={formData.subject}
        onChange={handleChange}
      />
      <Textarea
        required
        placeholder='Message'
        name="message" 
        style={{border:" 0.000001px solid rgb(187, 184, 184)", borderRadius:"0.3rem"}}
        value={formData.message}
        onChange={handleChange}
        rows={6}
      />
      <Group mt="md">
        <Button type="submit" loading={loading}  mb={20} ml={150} w={180} radius={200} className={classes.button} >
          Send Email
        </Button>
      </Group>
      {success && <Text  c={'green'} mt="md">Email sent successfully!</Text>}
      {error && <Text  c={"red"} mt="md">{error}</Text>} 
    </form>
  );
};

export default EmailForm;