import { TextInput,PasswordInput,Text,Anchor, Checkbox,NavLink, Button, Group, Box } from '@mantine/core';
// import { IconHome2 } from '@tabler/icons-react';

import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import "./loginform.css";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
    const [visible, { toggle }] = useDisclosure(false);
    const navigate = useNavigate()
  const form = useForm({
    initialValues: {  email: '', password: '' },
    validate: {
      
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must have at least 6 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
    initialValues: {
      email: '',
      password:'',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
    
  });
 async  function handleSubmit(value) {
   console.log(value)
      try {
          const {data} =  await Axios.post('http://localhost:5000/api/add/signin',
              {
                value
              }
          );
          navigate('/profile')
  }
  catch(err) {
    console.log("error")
  }
}
  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))} className='form'>
      <Text
      variant="gradient"
      gradient={{ from: 'teal', to: 'red', deg: 2 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      Login
    </Text>
        <TextInput 
        className='email'
          withAsterisk 
          label="Email" 
          placeholder="your@email.com" 
          {...form.getInputProps('email')}
          required
        />
        
        <PasswordInput
        label="Password"
        // visible={visible}
        {...form.getInputProps('password')}
        onVisibilityChange={toggle}
      />


      
   {/* <Button variant="outline" color="red" size="lg" radius="xl">Button</Button> */}

  

    
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
          {/* <Button
      variant="gradient"
      gradient={{ from: 'lime', to: 'red', deg: 90 }}
    >
      Submit
    </Button> */}
        </Group>
        {/* <p>Don't have an account?</p>
        <NavLink
        href="#required-for-focus"
        label="Sign"
        // leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      /> */}
       <Text fz="xs">
          Don't have an account?{' '}
          <Link to="/">Sign Up</Link>
        </Text>
      </form>
    </Box>
  );
}
export default Login;