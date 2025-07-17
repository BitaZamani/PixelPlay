"use client";

import GamesGrid from "@/components/pageSections/gamesGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "@/lib/Redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { bookmarks, email, favorites, isLoggedIn, name } = useSelector(
    (state: RootState) => state.auth
  );
  const [faveData, setFaveData] = useState([]);
  const [bookmarkData, setBookmarkData] = useState([]);
  useEffect(() => {
    const fetchFaves = async () => {
      console.log(favorites);
      if (favorites.length === 0) {
        setFaveData([]);
        return;
      }
      console.log("111111");
      try {
        const res = await fetch("/api/favoritegames", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids: favorites }),
        });

        const data = await res.json();
        setFaveData(data);
      } catch (err) {
        console.error("Failed to fetch favorites", err);
      }
    };
    console.log(favorites);
    fetchFaves();
  }, [favorites]);
  useEffect(() => {
    const fetchBookmarks = async () => {
      console.log(favorites);
      if (bookmarks.length === 0) {
        setFaveData([]);
        return;
      }
      console.log("111111");
      try {
        const res = await fetch("/api/bookmarkgames", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids: bookmarks }),
        });

        const data = await res.json();
        setBookmarkData(data);
      } catch (err) {
        console.error("Failed to fetch favorites", err);
      }
    };
    console.log(favorites);
    fetchBookmarks();
  }, [bookmarkData]);
  return (
    <div className=" p-6 w-full h-full border rounded shadow-sm bg-white">
      <div className="flex items-center space-x-6">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-600">{email}</p>
      </div>
      <Tabs>
        <TabsList defaultValue="favorites">
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
        </TabsList>
        <TabsContent value="favorites">
          <GamesGrid
            count={faveData.length}
            games={{ results: faveData }}
            urlBase="games"
            page={1}
          />
        </TabsContent>
        <TabsContent value="bookmarks">
          <GamesGrid
            count={faveData.length}
            games={{ results: faveData }}
            urlBase="games"
            page={1}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
