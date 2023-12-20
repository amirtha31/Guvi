import { TextInput ,PasswordInput,Text,Anchor,Select, Checkbox,NavLink, Button, Group, Box,DateInput } from '@mantine/core';
// import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

function Profile() {
  const [value,setValue] = useState(null)
    const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: { age: '', number: '', password: '', confirmPassword: '' },
    validate: {
      age: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must have at least 6 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))} className='form'>
      <Text
      variant="gradient"
      gradient={{ from: 'teal', to: 'red', deg: 2 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      Profile
    </Text>
      <TextInput
          withAsterisk 
          label="Age"
          placeholder="Enter your age"
          {...form.getInputProps('age')}
        />
        <Select
      label="Gender"
      placeholder="Pick value"
      data={['Male', 'Female']}
    />
        {/* <input type="date" {...form.getInputProps('date')}/> */}
        <TextInput
          withAsterisk 
          label="Mobile Number"
          placeholder="Enter your number"
          {...form.getInputProps('number')}
        />



<Group justify="center" mt="md">
  <Button type="submit">Submit</Button>
  {/* <Button variant="gradient" gradient={{ from: 'teal', to: 'red', deg: 105 }} loaderPosition="center">
    Submit
  </Button> */}
</Group>
        
        {/* <NavLink
        
        href="#required-for-focus"
        label="Login"
        // leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        
      /> */}
      <Text fz="xs">Already have an account?</Text>
      <Anchor href="https://mantine.dev/" target="_blank">
      Login
    </Anchor>
      </form>
    </Box>
  );
}
export default Profile;