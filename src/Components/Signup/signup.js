// import { TextInput,PasswordInput,Text,Anchor, Checkbox,NavLink, Button, Group, Box } from '@mantine/core';
// import "./signup.css";
// import { useForm } from '@mantine/form';
// import { useDisclosure } from '@mantine/hooks';
// import { Link } from 'react-router-dom';

// function Signup() {
//     const [visible, { toggle }] = useDisclosure(false);
//   const form = useForm({
//     initialValues: { name: '', email: '' },
//     // initialValues: {
//     //   email: '',
//     //   termsOfService: false,
//     // },
//     validate: {
//       name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//       // age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
//     },

//     // validate: {
//     //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//     // },
//     initialValues: {
//       password: 'secret',
//       confirmPassword: 'sevret',
//     },

//     validate: {
//       confirmPassword: (value, values) =>
//         value !== values.password ? 'Passwords did not match' : null,
//     },
//   });

//   return (
//     <Box maw={340} mx="auto">
//       <form onSubmit={form.onSubmit((values) => console.log(values))} className='form'>
//       <Text
//       variant="gradient"
//       gradient={{ from: 'teal', to: 'red', deg: 2 }}
//       sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
//       ta="center"
//       fz="xl"
//       fw={700}
//     >
//       Sign Up
//     </Text>
//       <TextInput
//           withAsterisk 
//           label="Name"
//           placeholder="Enter your name"
//           {...form.getInputProps('name')}
//         />
//         <TextInput
//           withAsterisk 
//           label="Email"
//           placeholder="your@email.com"
//           {...form.getInputProps('email')}
//         />
        
//         {/* <PasswordInput
//         label="Password"
//         // visible={visible}
//         onVisibilityChange={toggle}
//       />
//       <PasswordInput
//         label="Confirm Password"
//         placeholder="re-enter your password"
//         // visible={visible}
//         onVisibilityChange={toggle}
//       /> */}
//       <PasswordInput
//           label="Password"
//           placeholder="Password"
//           onVisibilityChange={toggle}
//           {...form.getInputProps('password')}
//         />

//         <PasswordInput
//           mt="sm"
//           label="Confirm password"
//           placeholder="Confirm password"
//           onVisibilityChange={toggle}
//           {...form.getInputProps('confirmPassword')}
//         />



// <Group justify="center" mt="md">
//   {/* <Button type="submit">Submit</Button> */}
//   <Button type="submit" variant="gradient" gradient={{ from: 'teal', to: 'red', deg: 105 }} loaderPosition="center" className='button'>
//     Submit
//   </Button>
// </Group>
        
//         {/* <NavLink
        
//         href="#required-for-focus"
//         label="Login"
//         // leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        
//       /> */}
//       <Text fz="xs">
//           Already have an account?{' '}
//           <Link to="/login">Login</Link>
//         </Text>
//       </form>
//     </Box>
//   );
// }
// export default Signup;

import React from 'react';
import { TextInput, PasswordInput, Text, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import Axios from 'axios'
function Signup() {
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: { name: '', email: '', password: '', confirmPassword: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must have at least 6 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });
  async function handleSubmit(value) {
    try{
      const {data} = await Axios.post('http://localhost:5000/api/add/create',{
        value
      });
      console.log("Account Login Sucess")
  }
  catch(err) {
      console.log(err);
  }
  }
  return (
    <Box maxWidth={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))} className="form">
        <Text variant="gradient" gradient={{ from: 'teal', to: 'red', deg: 2 }} ta="center" fz="xl" fw={700}>
          Sign Up
        </Text>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Enter your name"
          {...form.getInputProps('name')}
          error={form.errors.name}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
          error={form.errors.email}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          onVisibilityChange={toggle}
          {...form.getInputProps('password')}
          error={form.errors.password}
        />
        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          onVisibilityChange={toggle}
          {...form.getInputProps('confirmPassword')}
          error={form.errors.confirmPassword}
        />

        <Group justify="center" mt="md">
          <Button type="submit" variant="gradient" gradient={{ from: 'teal', to: 'red', deg: 105 }} loaderPosition="center" className="button">
            Submit
          </Button>
        </Group>

        <Text fz="xs">
          Already have an account? <Link to="/login">Login</Link>
        </Text>
      </form>
    </Box>
  );
}

export default Signup;
