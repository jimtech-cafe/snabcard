"use client";
import React, { useState } from "react";
import { Smartphone, CheckCircle2, Zap } from "lucide-react";

const networks = [
  {
    id: "mtn",
    name: "MTN",
    color: "bg-[#FFCC00]",
    text: "text-black",
    border: "border-[#FFCC00]",
  },
  {
    id: "airtel",
    name: "Airtel",
    color: "bg-[#FF0000]",
    text: "text-white",
    border: "border-[#FF0000]",
  },
  {
    id: "glo",
    name: "Glo",
    color: "bg-[#00833F]",
    text: "text-white",
    border: "border-[#00833F]",
  },
  {
    id: "9mobile",
    name: "9mobile",
    color: "bg-[#00573D]",
    text: "text-white",
    border: "border-[#00573D]",
  },
];

export default function DataPurchaseContainer() {
  const [selectedNetwork, setSelectedNetwork] = useState("mtn");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-slate-900 p-6 text-white">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Zap className="text-yellow-400 fill-yellow-400" size={20} />
          Buy Data Instantly
        </h2>
        <p className="text-slate-400 text-sm">
          Select network and enter details
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Network Selection */}
        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-3">
            Select Network
          </label>
          <div className="grid grid-cols-4 gap-3">
            {networks.map((net) => (
              <button
                key={net.id}
                onClick={() => setSelectedNetwork(net.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                  selectedNetwork === net.id
                    ? `${net.border} bg-opacity-10 bg-gray-50 shadow-sm scale-105`
                    : "border-transparent bg-gray-50 grayscale opacity-60"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${net.color} flex items-center justify-center font-bold ${net.text} text-xs mb-1 shadow-md`}
                >
                  {net.name[0]}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tight">
                  {net.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="08012345678"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Smartphone
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Data Plan
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-slate-900 outline-none appearance-none bg-white">
              <option>Select a plan...</option>
              <option>1GB SME (30 Days) - ₦250</option>
              <option>2GB SME (30 Days) - ₦500</option>
              <option>5GB SME (30 Days) - ₦1,250</option>
              <option>10GB SME (30 Days) - ₦2,500</option>
            </select>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 p-4 rounded-xl flex gap-3">
          <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
          <p className="text-xs text-blue-700 leading-relaxed">
            Data will be sent to <b>{phoneNumber || "the provided number"}</b>{" "}
            immediately after successful payment.
          </p>
        </div>

        {/* Action Button */}
        <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-[0.98]">
          Purchase Now
        </button>
      </div>
    </div>
  );
}
