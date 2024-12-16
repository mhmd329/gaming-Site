import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="background h-screen grid "> 
    <GridContainer cols={12}>
        <div className=" col-span-2 ">
       <SideBar/>
    </div>
    <div className=" col-span-10">
        this is the rest
        {children} 
        
    </div>
    </GridContainer>
    
    </main>
  );
}
