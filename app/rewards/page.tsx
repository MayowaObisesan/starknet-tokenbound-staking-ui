"use client";

import React, { useMemo, useState } from "react";
import { Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";

function Rewards() {
    const [actionLoading, setActionLoading] = useState(false)
    const [stakeAmount, setStakeAmount] = useState<number>(0);

    /* Hooks for reading and writing to your smart contract. */
    /*const { data, isLoading } = useContractRead({
        address: "yourContractAddressHere",
        functionName: "yourFunctionNameHere",
        abi: ["yourAbiHere"],
        args: [],
    });

    const calls = useMemo(() => {
        const tx = {
            contractAddress: 'yourContractAddressHere',
            entrypoint: 'yourContractFunctionName',
            calldata: ["argsIfAvailable"]
        };
        return [tx];
    }, [stakeAmount]);

    const { write } = useContractWrite({ calls });*/

    const handleClaimRewards = async () => {
       /* Handle claim rewards here. */
    };

    return (
        <form className="w-full max-w-md mx-auto">
            <div className="flex flex-col items-center gap-y-4 p-4">
                <header className="font-bold text-2xl">Claim Rewards</header>
                <div className="text-center text-balance">Claim rewards for your staked tokens</div>

                <Card className="flex flex-col flex-1 grow shrink-0 p-4 mt-8 w-full">
                    <CardHeader className="flex flex-col font-bold text-xl text-center gap-y-6">
                        Total Rewards Accrued
                        <div className="text-7xl">30 USDC</div>
                    </CardHeader>
                    <CardBody>
                        <Divider className="my-4" />
                        <section className="flex flex-col gap-y-8 my-8">
                            <div className="flex flex-row items-start justify-center">
                                <span className="grow shrink-0">Date Staked</span>
                                <span className="shrink grow-0 flex flex-col items-end">
                                    04/07/2024
                                    <span className="leading-tight font-bold font-xs text-default">(mm/dd/yyyy)</span>
                                </span>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                                <span className="grow shrink-0">Date Unlocked</span>
                                <span className="shrink grow-0 flex flex-col items-end">
                                    04/07/2024
                                    <span className="leading-tight font-bold font-xs text-default">(mm/dd/yyyy)</span>
                                </span>
                            </div>
                        </section>

                        <Button type="button" color="success" isLoading={actionLoading} disabled={actionLoading} onPress={handleClaimRewards} className="font-medium">
                            Claim Reward
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </form>
    );
}

export default Rewards;
