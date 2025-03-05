
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Shield } from "lucide-react";
import { UserRole } from "@/contexts/AuthContext";

export function RoleSwitcher() {
  const { user, setUserRole } = useAuth();
  
  if (!user) return null;

  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <Shield className="mr-2 h-4 w-4" />
          <span>Role: {user.role || 'none'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Switch Role (Testing)</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleRoleChange('admin')}>
          Administrator
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleRoleChange('parent')}>
          Parent
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleRoleChange('student')}>
          Student
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleRoleChange('tutor')}>
          Tutor
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
