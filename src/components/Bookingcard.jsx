


"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

export function BookingCard({ tutor = {} }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async (e) => {
    e.preventDefault();

    // form data collect
    const formData = new FormData(e.target);

    const bookingData = {
      userId: user?.id,
      useremail: user?.email,
      username: user?.name,

      // user phone number from input
      usernumber: formData.get("number"),

      // tutor data
      tutorName: tutor?.Name || tutor?.name,
      tutordescription: tutor?.description,

      
    };

    console.log("Booking Data:", bookingData);

    const {data:tokenData} = await authClient.token()

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      console.log("Saved:", data);

  

    } catch (error) {
      console.log(error);
    }
    toast.success("you booked successfully!")
  };

  return (
    <Modal>
      <Button>Book</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>

              <Modal.Heading>
                Booking Form
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">

                {/* form submit */}
                <form
                  onSubmit={handleBooking}
                  className="p-5 space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <TextField
                      name="number"
                      type="number"
                      isRequired
                    >
                      <Label>Phone Number</Label>
                      <Input placeholder="01XXXXXXXXX" />
                      <FieldError />
                    </TextField>

                    <TextField>
                      <Label>Tutor Name</Label>

                      <Input
                        value={
                          tutor?.Name ||
                          tutor?.name ||
                          ""
                        }
                        readOnly
                      />
                    </TextField>

                    <TextField>
  <Label>Description</Label>

  <TextArea
    value={tutor?.description || ""}
    readOnly
  />
</TextField>

                    <div className="md:col-span-2">
                      <TextField>
                        <Label>Email</Label>

                        <TextArea
                          value={user?.email || ""}
                          readOnly
                        />
                      </TextField>
                    </div>

                  </div>

                  <Button
                    className="w-full"
                    type="submit"
                  >
                    Confirm Booking
                  </Button>

                </form>

              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}