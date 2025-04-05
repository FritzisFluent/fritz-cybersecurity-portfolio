
import { Moon, Sun, LaptopIcon } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`
            border rounded-full transition-all duration-300
            ${resolvedTheme === 'dark' 
              ? 'border-cyber-primary/30 hover:bg-cyber-primary/10' 
              : 'border-blue-300 hover:bg-blue-50'}
          `}
        >
          <Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 ${resolvedTheme === 'dark' ? 'opacity-0' : 'opacity-100'}`} />
          <Moon className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 transition-all duration-300 ${resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={`${resolvedTheme === 'dark' ? 'bg-cyber-terminal border-cyber-primary/30' : 'bg-white border-slate-200 shadow-lg'}`}
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={`flex items-center gap-2 cursor-pointer ${
            theme === 'light' 
              ? 'text-blue-600 font-medium' 
              : resolvedTheme === 'dark' ? 'text-cyber-light' : 'text-slate-700'
          }`}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-2 cursor-pointer ${
            theme === 'dark' 
              ? 'text-cyber-primary font-medium' 
              : resolvedTheme === 'dark' ? 'text-cyber-light' : 'text-slate-700'
          }`}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={`flex items-center gap-2 cursor-pointer ${
            theme === 'system' 
              ? resolvedTheme === 'dark' ? 'text-cyber-primary font-medium' : 'text-blue-600 font-medium'
              : resolvedTheme === 'dark' ? 'text-cyber-light' : 'text-slate-700'
          }`}
        >
          <LaptopIcon className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
