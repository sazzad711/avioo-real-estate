import Link from "next/link";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Hero({title1,
  title2,
  desc1,
  buttonText1,
  buttonText2,
  linkName,
  imageUrl,}) {
  return (
    <Stack  minH={'70vh'} direction={{ base: 'column', md: 'row' }} margin={50} >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              {title1}
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              {title2}
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            {desc1}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.600',
                color: "black",
                
              }}>
        <Link href={linkName}>
          <a>{buttonText1}</a>
        </Link>
            </Button>
            <Button rounded={'full'} bg={'green.100'}>
            {buttonText2}
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          
            boxShadow={'2xl'}
          alt={'Login Image'}
          objectFit={'cover'}
          height={380}
          src={imageUrl}
        />
      </Flex>
    </Stack>
  );
}