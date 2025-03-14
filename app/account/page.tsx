"use client";

import React, {useState} from "react";
import {Button, Card, CardBody, CardHeader, Divider} from "@heroui/react";
import {useAccount} from "@starknet-react/core";
import {shortenAddress} from "@/app/utils";

function Owner() {
  const [actionLoading, setActionLoading] = useState(false);
  const {account} = useAccount();

  const handleLock = async () => {
    /* If you need to implement any additional locking mechanism. */
  };

  const handleGetIsLocked = async () => {
    /* To know if the token is locked. */
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center gap-y-4 p-4">
        <header className="font-bold text-2xl">Your Account</header>
        <div className="text-center text-balance">Details about your account</div>

        <Card className="flex flex-col flex-1 grow shrink-0 p-4 mt-8 w-full">
          <CardBody>
            <CardHeader className="block font-bold text-6xl text-center self-center">
              {account?.address && shortenAddress(account?.address!)}
            </CardHeader>
            <Divider className="my-4"/>
            <section className="flex flex-col gap-y-4 my-8">
              <div className="font-bold text-xl">Account details</div>
              <div className="flex flex-row items-center justify-center">
                <span className="grow shrink-0">Locked: </span>
                <span className="shrink grow-0">No</span>
              </div>
            </section>

            <Button type="button" color="danger" isLoading={actionLoading} disabled={actionLoading} onPress={handleLock}
                    className="font-medium">
              Lock Account
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Owner;
