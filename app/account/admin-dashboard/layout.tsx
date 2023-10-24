"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

import Sidebar from "@/app/account/admin-dashboard/Sidebar/index";
import React from "react";
// import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
        <div className="">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <aside className="overflow-y-hidden no-scrollbar">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              </aside>
                {/* <!-- ===== Main Content Start ===== --> */}
                <section className="overflow-y-scroll no-scrollbar">
                  <div className="mx-auto max-w-screen-2xl">
                    {children}
                  </div>
                </section>
               
            </div>
          )}
        </div>
     
  );
}
