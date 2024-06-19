"use client";

import { faPhone, faStar, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  RadioGroup,
  TextArea,
  TextField,
  Theme,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useState } from "react";

import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";

const JobForm = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
    <Theme>
      <form className="container mt-6 flex flex-col gap-6">
        <TextField.Root size="2" placeholder="Job Title" />

        <div className="grid grid-cols-3 gap-6 *:grow">
          <div>
            Work Type
            <RadioGroup.Root defaultValue="remote" name="work-type">
              <RadioGroup.Item value="remote">Remote</RadioGroup.Item>
              <RadioGroup.Item value="hybrid">Hybrid</RadioGroup.Item>
              <RadioGroup.Item value="onsite">On-Site</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Employment
            <RadioGroup.Root defaultValue="project" name="employment-type">
              <RadioGroup.Item value="project">Project-Based</RadioGroup.Item>
              <RadioGroup.Item value="part">Part-Time</RadioGroup.Item>
              <RadioGroup.Item value="full">Full-Time</RadioGroup.Item>
            </RadioGroup.Root>
          </div>

          <div>
            Salary (per year)
            <TextField.Root>
              <TextField.Slot>$</TextField.Slot>
              <TextField.Slot>k</TextField.Slot>
            </TextField.Root>
          </div>
        </div>
        <div className="">
          Location
          <div className="">
            <div className="flex">
              <CountrySelect
                onChange={(e) => {
                  setCountryid(e.id);
                }}
                placeHolder="Select Country"
              />
              <StateSelect
                countryid={countryid}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
              <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => {
                  console.log(e);
                }}
                placeHolder="Select City"
              />
            </div>
          </div>
        </div>
        <TextArea placeholder="Job Description" resize="vertical" />

        <div className="flex">
          <div className="w-1/3">
            <h3>Job Icon</h3>
            <div className="inline-flex items-center content-center justify-center bg-gray-100 size-24 rounded-md border ">
              <FontAwesomeIcon icon={faStar} className="text-gray-400" />
            </div>
            <div className="mt-2">
              <Button variant="soft">Select file</Button>
            </div>
          </div>

          {/* Contact */}
          <div className="grow">
            <h3>Contact Information</h3>
            <div className="flex gap-2">
              <div>
                <div className="inline-flex items-center content-center justify-center bg-gray-100 size-24 rounded-md border ">
                  <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                </div>
                <div className="mt-2">
                  <Button variant="soft" >
                    Select file
                  </Button>
                </div>
              </div>
              <div className="grow flex flex-col gap-4">
                <TextField.Root placeholder="John Doe">
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faUser} />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder="Phone" type="tel">
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faPhone} />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder="Email" type="email">
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="3">
            <span className="px-8">Save</span>
          </Button>
        </div>
      </form>
    </Theme>
  );
};

export default JobForm;
