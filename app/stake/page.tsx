"use client";

import React, {useMemo, useState} from "react";
import {Button, Card, CardBody, Divider, Input, Tab, Tabs} from "@heroui/react";

function Create() {
  const [actionLoading, setLoading] = useState(false)
  const [stakeAmount, setStakeAmount] = useState<number>(0);

  /* Implement contract read here passing in the appropriate arguments to each parameters. */
  /*const {data, isLoading} = useContractRead({
    address: "yourContractAddressHere",
    functionName: "yourFunctionNameHere",
    abi: ["yourAbiHere"],
    args: [],
  });

  const calls = useMemo(() => {
    const tx = {
      contractAddress: 'yourContractAddressHere',
      entrypoint: 'yourContractFunctionName',
      calldata: ["argsIfAvailable", 0]
    };
    return [tx];
  }, [stakeAmount]);

  const {write} = useContractWrite({calls});*/

  const handleStake = async () => {
    /* Handle stake here. */
  };

  const handleUnstake = async () => {
    /* Handle unstake here. */
  };

  return (
    <form className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center gap-y-4 p-4">
        <header className="font-bold text-2xl">Stake USDC</header>
        <div className="text-center text-balance">Stake occassionally and receive rewards after a fixed amount of
          time.
        </div>

        <Tabs aria-label="Options" className="mt-8">
          <Tab key="stake" title="Stake" className="w-full">
            <Card className="flex flex-col flex-1 grow shrink-0 p-4">
              <CardBody>
                <div className="flex flex-row w-full">
                  {/* <Input type="number" label="Amount to stake" placeholder="Enter amount to stake" defaultValue={"50"} size="lg" onChange={handleStakeAmountChange} /> */}
                  <Input
                    label="Amount to Stake"
                    placeholder="0.00"
                    labelPlacement="outside"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                    endContent={
                      <div className="flex items-center">
                        <label className="sr-only" htmlFor="currency">
                          Currency
                        </label>
                        <select
                          className="outline-none border-0 bg-transparent text-default-400 text-small"
                          id="currency"
                          name="currency"
                        >
                          <option>USDC</option>
                          <option>STRK</option>
                        </select>
                      </div>
                    }
                    type="number"
                  />
                </div>
                <Divider className="my-4"/>
                <section className="flex flex-col gap-y-4 my-8">
                  <div className="font-bold text-xl">Transaction Summary</div>
                  <div className="flex flex-row items-center justify-center">
                    <span className="grow shrink-0">You will receive</span>
                    <span className="shrink grow-0">10 USDC</span>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <span className="grow shrink-0">APR</span>
                    <span className="shrink grow-0">10 USDC</span>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <span className="grow shrink-0">Transaction Fee</span>
                    <span className="shrink grow-0">10 USDC</span>
                  </div>
                </section>

                <Button type="button" color="success" isLoading={actionLoading} disabled={!!actionLoading} onPress={handleStake}
                        className="font-medium">
                  Stake
                </Button>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="unstake" title="Unstake" className="w-full">
            <Card className="flex flex-col flex-1 grow shrink-0 p-4">
              <CardBody>
                <div className="flex flex-row w-full">
                  {/* <Input type="number" label="Amount to stake" placeholder="Enter amount to stake" defaultValue={"50"} size="lg" onChange={handleStakeAmountChange} /> */}
                  <Input
                    label="Amount to Unstake"
                    placeholder="0.00"
                    labelPlacement="outside"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                    endContent={
                      <div className="flex items-center">
                        <label className="sr-only" htmlFor="currency">
                          Currency
                        </label>
                        <select
                          className="outline-none border-0 bg-transparent text-default-400 text-small"
                          id="currency"
                          name="currency"
                        >
                          <option>USDC</option>
                          <option>STRK</option>
                        </select>
                      </div>
                    }
                    type="number"
                  />
                </div>
                <Divider className="my-4"/>
                <section className="flex flex-col gap-y-4 my-8">
                  <div className="font-bold text-xl">Transaction Summary</div>
                  <div className="flex flex-row items-center justify-center">
                    <span className="grow shrink-0">You will receive</span>
                    <span className="shrink grow-0">10 USDC</span>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <span className="grow shrink-0">APR</span>
                    <span className="shrink grow-0">10 USDC</span>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <span className="grow shrink-0">Transaction Fee</span>
                    <span className="shrink grow-0">10 USDC</span>
                  </div>
                </section>

                <Button type="button" color="success" isLoading={actionLoading} disabled={actionLoading} onPress={handleUnstake}
                        className="font-medium">
                  Unstake
                </Button>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </form>
  );
}

export default Create;
