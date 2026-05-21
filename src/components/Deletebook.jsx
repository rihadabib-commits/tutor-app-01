"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";


export function Deletebook({teachersId}) {


  const handleDelete = async()=>{
    const {data:tokenData} = await authClient.token()
              
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/${teachersId}`, {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${tokenData?.token}`
  }
});
                const data = await res.json();
                 window.location.reload();

  }
  return (
    <AlertDialog>
     <Button className="text-red-400 hover:text-red-600 text-lg">Delete<TrashBin />
     </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
             
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}