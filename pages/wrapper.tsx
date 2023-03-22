import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function Wrapper({ children }: { children: ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
