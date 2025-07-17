"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "@/lib/Redux/store";
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
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <ProtectedRoute>
      <div className=" p-6">
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
            {favorites.length > 0 ? (
              <CollectionGrid games={favorites} length={favorites.length} />
            ) : (
              <span>There is no favorite games.</span>
            )}
          </TabsContent>
          <TabsContent value="bookmarks">
            {bookmarks.length > 0 ? (
              <CollectionGrid games={bookmarks} length={bookmarks.length} />
            ) : (
              <span>There is no bookmark.</span>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </ProtectedRoute>
  );
};

export default ProfilePage;
