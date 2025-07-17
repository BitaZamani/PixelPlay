"use client";

import GamesGrid from "@/components/pageSections/gamesGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "@/lib/Redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "../protectedRoute";
import CollectionGrid from "@/components/pageSections/collectionGrid";
import FullTooltip from "@/components/ui/fullTooltip";
import { House, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { logOut } from "@/lib/Redux/features/auth/authSlice";

const ProfilePage = () => {
  const { bookmarks, email, favorites, name } = useSelector(
    (state: RootState) => state.auth
  );
  const [faveErr, setFaveErr] = useState("");
  const [markErr, setMarkErr] = useState("");
  const [faveData, setFaveData] = useState([]);
  const [bookmarkData, setBookmarkData] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFaves = () => {
      if (favorites.length === 0) {
        setFaveData([]);
        return;
      }
      try {
        const data = localStorage.getItem("userFavorites");
        if (data) {
          const faves = JSON.parse(data);
          setFaveData(faves.favorites);
        } else {
          setFaveData([]);
        }
      } catch (err) {
        setFaveErr(
          err instanceof Error ? err.message : "Something went wrong."
        );

        setFaveData([]);
      }
    };
    fetchFaves();
  }, [favorites]);

  useEffect(() => {
    const fetchBookmarks = () => {
      if (bookmarks.length === 0) {
        setBookmarkData([]);
        return;
      }
      try {
        const data = localStorage.getItem("userBookmarks");
        if (data) {
          const marks = JSON.parse(data);
          setBookmarkData(marks);
        } else {
          setBookmarkData([]);
        }
      } catch (err) {
        setMarkErr(
          err instanceof Error ? err.message : "Something went wrong."
        );
        setBookmarkData([]);
      }
    };
    fetchBookmarks();
  }, [bookmarks]);

  return (
    <ProtectedRoute>
      <div className=" p-6 w-full h-screen rounded shadow-sm bg-gradient-to-bl from-black to-purple-950">
        <div className="flex justify-between">
          <div className="flex flex-col space-x-6">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-gray-600">{email}</p>
          </div>
          <div className=" flex gap-5">
            <FullTooltip
              content="Home"
              trigger={<House />}
              onClick={() => router.push("/")}
            />
            <FullTooltip
              content="Log out"
              trigger={<LogOut />}
              onClick={() => dispatch(logOut())}
            />
          </div>
        </div>
        <Tabs defaultValue="favorites">
          <TabsList>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          </TabsList>
          <TabsContent value="favorites">
            {faveErr === "" ? (
              faveData.length > 0 ? (
                <CollectionGrid games={faveData} length={faveData.length} />
              ) : (
                <span>There is no favorite games.</span>
              )
            ) : (
              <span>{markErr}</span>
            )}
          </TabsContent>
          <TabsContent value="bookmarks">
            {markErr === "" ? (
              bookmarkData.length > 0 ? (
                <GamesGrid
                  count={bookmarkData.length}
                  games={{ results: bookmarkData }}
                  urlBase="games"
                  page={1}
                />
              ) : (
                <span>There is no bookmark.</span>
              )
            ) : (
              <span>{markErr}</span>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </ProtectedRoute>
  );
};

export default ProfilePage;
