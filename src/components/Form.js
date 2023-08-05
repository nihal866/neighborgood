import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [tutoring, setTutoring] = useState();

  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false.false,
  ]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  return (
    <VStack spacing="5px">
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl as="fieldset" isRequired>
        <FormLabel as="legend">How to contact me?</FormLabel>
        <RadioGroup defaultValue="Itachi">
          <HStack spacing="24px">
            <Radio value="email">Email</Radio>
            <Radio value="cell">Cell</Radio>
            <Radio value="address">Street Address</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl id="contact" isRequired>
        <FormLabel>Contact Information</FormLabel>
        <Input
          placeholder="Enter Your Contact Number"
          onChange={(e) => setContact(e.target.value)}
        />
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">
          I may be interested in sharing these activities with nearby neighbors
        </FormLabel>
        <Stack spacing={5} direction="column">
          <Checkbox>Walking (circle speeds):</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="slow">Slow</Radio>
              <Radio value="moderate">Moderate</Radio>
              <Radio value="fast">Fast</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Stulsaft Park</Checkbox>
          <Checkbox>Running (circle speeds):</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="slow">Slow(jogging)</Radio>
              <Radio value="moderate">Moderate</Radio>
              <Radio value="fast">Fast</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Bicycling</Checkbox>
          <Checkbox>Dogwalking</Checkbox>
          <Checkbox>Gardening</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="flowers">Flowers/Landscape</Radio>
              <Radio value="fruit">Fruit/Veg</Radio>
              <Radio value="both">Both</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Swimming</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="back">My backyard</Radio>
              <Radio value="public">Public pool</Radio>
              <Radio value="health-club">Health Club pool</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Coffee/tea at my place or yours, 15-30 min</Checkbox>
          <Checkbox>Sketching/drawing/painting</Checkbox>
          <Checkbox>Cookouts/BBQs</Checkbox>
          <Checkbox>Block parties</Checkbox>
          <Checkbox>Dinner parties</Checkbox>
          <Checkbox>
            Crummy” dinner parties (*very* casual, leftovers okay, no
            housecleaning)
          </Checkbox>
          <Checkbox>In-person computer games</Checkbox>
          <Checkbox>Watching Televised Sports</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="football">Football</Radio>
              <Radio value="basketball">Basketball</Radio>
              <Radio value="others">others</Radio>
            </HStack>
          </RadioGroup>
        </Stack>
      </FormControl>
      <FormControl>
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([
              e.target.checked,
              e.target.checked,
              e.target.checked,
              e.target.checked,
              e.target.checked,
            ])
          }
        >
          Movies
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([
                e.target.checked,
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
              ])
            }
          >
            Action
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                e.target.checked,
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
              ])
            }
          >
            Romance
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[2]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                e.target.checked,
                checkedItems[3],
                checkedItems[4],
              ])
            }
          >
            Comedy
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[3]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                e.target.checked,
                checkedItems[4],
              ])
            }
          >
            Science Fiction
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[4]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                e.target.checked,
              ])
            }
          >
            Indie
          </Checkbox>
        </Stack>
      </FormControl>
      <FormControl as="fieldset">
        <Stack spacing={5} direction="column">
          <Checkbox>Shopping</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="groceries">Groceries</Radio>
              <Radio value="clothing">Clothing</Radio>
              <Radio value="book">Book</Radio>
              <Radio value="others">Others</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Restaurants</Checkbox>
          <Checkbox>Reading Group</Checkbox>
          <Checkbox>Happy Hour</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="quatrely">Quaterly</Radio>
              <Radio value="monthly">Monthly</Radio>
              <Radio value="weekly">Weekly</Radio>
              <Radio value="outdoors">Outdoors only</Radio>
            </HStack>
          </RadioGroup>
        </Stack>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">
          Favors I can do, check all that apply. I may be able to do these free
          favors for nearby neighbors:
        </FormLabel>
        <Stack spacing={5} direction="column">
          <Checkbox>Errands:</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="emergencies">Emergencies</Radio>
              <Radio value="occasional">Occasional</Radio>
              <Radio value="regular">Regular</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Rides:</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="emergencies">Emergencies</Radio>
              <Radio value="occasional">Occasional</Radio>
              <Radio value="regular">Regular</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Childcare:</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="emergencies">Emergencies</Radio>
              <Radio value="occasional">Occasional</Radio>
              <Radio value="regular">Regular</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Eldercare:</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="emergencies">Emergencies</Radio>
              <Radio value="occasional">Occasional</Radio>
              <Radio value="regular">Regular</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Pet care:</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="emergencies">Emergencies</Radio>
              <Radio value="occasional">Occasional</Radio>
              <Radio value="regular">Regular</Radio>
            </HStack>
          </RadioGroup>
        </Stack>
      </FormControl>
      <FormControl id="tutoring">
        <FormLabel>Tutoring? If Yes, which subjects??</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setTutoring(e.target.value)}
        />
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">
          Favors I can do, check all that apply. I may be able to do these free
          favors for nearby neighbors:
        </FormLabel>
        <Stack spacing={5} direction="column">
          <Checkbox>Repair Advice:</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="home">Home Repair</Radio>
              <Radio value="auto">Auto Repair</Radio>
            </HStack>
          </RadioGroup>
          <Checkbox>Other Advice:</Checkbox>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="garden">Garden</Radio>
              <Radio value="computer">Computer</Radio>
            </HStack>
          </RadioGroup>
        </Stack>
      </FormControl>
      <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}>
        Submit
      </Button>
    </VStack>
  );
};

export default Form;
