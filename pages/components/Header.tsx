import {Box, Heading, Text} from '@chakra-ui/react';

export function Header() {
  return (
    <Box
      as='section'
      color='#F7FAFC'
      bgGradient={{
        base: 'linear-gradient(180deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%)',
        md: 'linear-gradient(90deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%)'
      }}
      pt='80px'
      pb='198px'
      px='32px'
      textAlign='center'
    >
      <Heading fontWeight='800' fontFamily={'Inter'} fontSize={{base: '30px', md: '48px'}} textAlign={{base: 'left', md: 'center'}}>
        Simple pricing for your business
      </Heading>
      <Text fontWeight='500' fontSize={{base: '18px', md: '24px'}} pt='16px' textAlign={{base: 'left', md: 'center'}}>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
