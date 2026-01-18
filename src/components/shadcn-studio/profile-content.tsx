import { Shield, Key, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Tabs } from "../ui/taps";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import ChangePasswordDialog from "../common/ChangePasswordDialog";

export default function ProfileContent() {
  return (
    <Tabs defaultValue="account" className="space-y-6">
      {/* Account Settings */}
      <TabsContent value="account" className="space-y-6">
        <AlertDialog>
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and subscription.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base">Account Status</Label>
                  <p className="text-muted-foreground text-sm">
                    Your account is currently active
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-green-200 bg-green-50 text-green-700"
                >
                  Active
                </Badge>
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base">Password</Label>
                  <p className="text-muted-foreground text-sm">
                    Last changed 3 months ago
                  </p>
                </div>

                <AlertDialogTrigger asChild>
                  <Button variant="outline">
                    <Key className="mr-2 h-4 w-4" />
                    Change Password
                  </Button>
                </AlertDialogTrigger>
              </div>
              <Separator />
            </CardContent>
          </Card>
          <ChangePasswordDialog/>
        </AlertDialog>
      </TabsContent>
    </Tabs>
  );
}
