





"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Label, TextField, TextArea, Select, FieldError, Input, ListBox } from '@heroui/react';
import React from 'react';

const TutorPage = () => {

    const onSubmit = async (e) => {


        e.preventDefault();

        const {data:tokenData} = await authClient.token();
        // const fromData = new FormData(e.currentTarget);

        const form = e.target;
const fromData = new FormData(form);
        const tuttor = Object.fromEntries(fromData.entries());
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tuttor),
            authorization:`Bearer ${tokenData?.token}`
        });
        const data = await res.json();
        console.log(data);
    };

    const inputClass = "rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-400 transition-all px-3 py-2 w-full text-sm";

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f5f3ff", padding: "40px 16px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>

                {/* Header */}
                <div style={{ marginBottom: "32px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                        <div style={{ backgroundColor: "#9333ea", padding: "10px", borderRadius: "14px" }}>
                            <svg width="22" height="22" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 21.5a12 12 0 01-6.16-10.922L12 14z" />
                            </svg>
                        </div>
                        <div>
                            <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#1f1235", margin: 0 }}>Add New Tutor</h1>
                            <p style={{ fontSize: "13px", color: "#7c6f9f", margin: 0 }}>Fill in the details to list a tutor on MediQueue</p>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "36px", boxShadow: "0 4px 24px rgba(147,51,234,0.08)", border: "1px solid #ede9fe" }}>
                    <form onSubmit={onSubmit}>

                        {/* Section: Basic Info */}
                        <div style={{ marginBottom: "28px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                                <div style={{ width: "4px", height: "20px", backgroundColor: "#9333ea", borderRadius: "4px" }} />
                                <span style={{ fontSize: "13px", fontWeight: "600", color: "#9333ea", textTransform: "uppercase", letterSpacing: "0.08em" }}>Basic Info</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

                                <div style={{ gridColumn: "1 / -1" }}>
                                    <TextField name="Name" isRequired>
                                        <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Tutor Name</Label>
                                        <Input placeholder="John Doe" className={inputClass} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div style={{ gridColumn: "1 / -1" }}>
                                    <TextField name="imageUrl" isRequired>
                                        <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Image URL</Label>
                                        <Input type="url" placeholder="https://example.com/photo.jpg" className={inputClass} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div>
                                    <Select name="category" isRequired className="w-full" placeholder="Select subject">
                                        <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Subject</Label>
                                        <Select.Trigger className="rounded-xl">
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                {["Mathematics", "Bangla", "English", "Physics", "Biology", "Chemistry"].map(sub => (
                                                    <ListBox.Item key={sub} id={sub} textValue={sub}>
                                                        {sub}
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                ))}
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                </div>

                                <div>
                                    <TextField name="mode" isRequired>
                                        <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Teaching Mode</Label>
                                        <Input placeholder="Online / Offline" className={inputClass} />
                                        <FieldError />
                                    </TextField>
                                </div>

                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: "1px", backgroundColor: "#f3f0ff", margin: "8px 0 28px" }} />

                        {/* Section: Schedule & Fee */}
                        <div style={{ marginBottom: "28px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                                <div style={{ width: "4px", height: "20px", backgroundColor: "#a855f7", borderRadius: "4px" }} />
                                <span style={{ fontSize: "13px", fontWeight: "600", color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.08em" }}>Schedule & Fee</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

                                <div>
                                    <TextField name="dayAndTime" isRequired>
                                        <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Available Day & Time</Label>
                                        <Input placeholder="Mon–Fri, 10am–6pm" className={inputClass} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div>
                                    <TextField name="sessionStartDate" type="date" isRequired>
                                        <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Session Start Date</Label>
                                        <Input type="date" className={inputClass} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div>
                                    <TextField name="price" type="number" isRequired>
                                        <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Hourly Fee (৳)</Label>
                                        <Input type="number" placeholder="1299" className={inputClass} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div>
                                    <TextField name="total" isRequired>
                                        <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Total Slots</Label>
                                        <Input placeholder="100" className={inputClass} />
                                        <FieldError />
                                    </TextField>
                                </div>

                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: "1px", backgroundColor: "#f3f0ff", margin: "8px 0 28px" }} />

                        {/* Section: Details */}
                        <div style={{ marginBottom: "32px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                                <div style={{ width: "4px", height: "20px", backgroundColor: "#c084fc", borderRadius: "4px" }} />
                                <span style={{ fontSize: "13px", fontWeight: "600", color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.08em" }}>Details</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                                <TextField name="areaCity" isRequired>
                                    <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Area / City</Label>
                                    <Input placeholder="Dhaka, Mirpur" className={inputClass} />
                                    <FieldError />
                                </TextField>

                                <TextField name="description" isRequired>
                                    <Label style={{ fontSize: "13px", fontWeight: "500", color: "#4b5563", marginBottom: "6px", display: "block" }}>Instructions & Experience</Label>
                                    <TextArea
                                        placeholder="Describe teaching experience, methodology, qualifications..."
                                        className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 w-full text-sm"
                                        style={{ minHeight: "100px", resize: "vertical" }}
                                    />
                                    <FieldError />
                                </TextField>

                            </div>
                        </div>

                        {/* Submit */}
                        <button
                        
                              type="submit"
  onClick={(e) => {
    // ✅ prevent weird bubbling / duplicate trigger
    e.stopPropagation();
  }}

                            style={{
                                width: "100%",
                                padding: "14px",
                                backgroundColor: "#9333ea",
                                color: "white",
                                border: "none",
                                borderRadius: "14px",
                                fontSize: "15px",
                                fontWeight: "600",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                letterSpacing: "0.02em"
                            }}
                        >
                            <svg width="18" height="18" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            Add Tutor
                        </button>

                    </form>
                </div>

                {/* Footer note */}
                <p style={{ textAlign: "center", fontSize: "12px", color: "#a78bfa", marginTop: "16px" }}>
                    All tutor profiles are reviewed before going live on MediQueue.
                </p>

            </div>
        </div>
    );
};

export default TutorPage;