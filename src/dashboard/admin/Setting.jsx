// src/pages/dashboard/admin/Setting.jsx
import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Switch } from "@/components/ui/switch"; // or use native input
// import { Switch } from "";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Lock, Monitor, ShieldCheck } from "lucide-react";
// import "./setting.css"; // optional for custom styles

const Setting = () => {
  const [twoStep, setTwoStep] = useState(true);

  const handleToggle2FA = () => {
    setTwoStep((prev) => !prev);
    toast.success(`Two-step verification ${!twoStep ? "enabled" : "disabled"}`);
  };

  return (
    <Tabs.Root className="tabs-root" defaultValue="security">
      <Tabs.List className="tabs-list">
        <Tabs.Trigger className="tab-trigger" value="general">
          General
        </Tabs.Trigger>
        <Tabs.Trigger className="tab-trigger" value="security">
          Security
        </Tabs.Trigger>
        <Tabs.Trigger className="tab-trigger" value="devices">
          Devices
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content className="tab-content" value="security">
        <div className="section">
          <h2>
            <Lock size={18} className="inline mr-2" /> Change Password
          </h2>
          <Button
            onClick={() => toast("Redirecting to change password page...")}
          >
            Update Password
          </Button>
        </div>

        <div className="section">
          <h2>
            <ShieldCheck size={18} className="inline mr-2" /> Two-Step
            Verification
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Switch checked={twoStep} onCheckedChange={handleToggle2FA} />
            <span>{twoStep ? "Enabled" : "Disabled"}</span>
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content className="tab-content" value="devices">
        <h2>
          <Monitor size={18} className="inline mr-2" /> Active Devices
        </h2>
        <ul>
          <li>
            Windows - Chrome - Dhaka{" "}
            <Button variant="destructive">Remove</Button>
          </li>
          <li>
            Android - Firefox - Rajshahi{" "}
            <Button variant="destructive">Remove</Button>
          </li>
        </ul>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default Setting;
