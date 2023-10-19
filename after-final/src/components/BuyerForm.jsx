import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function BuyerForm({ onSubmit, values, handleChange }) {
  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input
          value={values.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Apellido</FormLabel>
        <Input
          value={values.lastName}
          name="lastName"
          type="text"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Teléfono</FormLabel>
        <Input
          value={values.phone}
          name="phone"
          type="text"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          value={values.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Repita email por favor</FormLabel>
        <Input
          value={values.email2}
          name="email2"
          type="email"
          onChange={handleChange}
        />
      </FormControl>
      <Button w="100%" mt="5" type="submit">
        Comprar
      </Button>
    </form>
  );
}

export default BuyerForm;
