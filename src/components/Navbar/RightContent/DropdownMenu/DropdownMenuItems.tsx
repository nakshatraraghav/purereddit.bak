import { MenuItemIcons } from "@/assets/icons";
import { DropdownAnimations } from "@/headlessAnimations/DropdownMenu";
import { Menu, Transition } from "@headlessui/react";
import { FC } from "react";
import MenuItem from "./MenuItem";

import { auth } from "@/firebase/app";
import { signOut, User } from "firebase/auth";

import { authModalState } from "@/atoms/authModal";
import { communityState } from "@/atoms/communities";
import { useAtom, useSetAtom } from "jotai";

type DropdownMenuItemsProps = {
  user?: User | null;
};

const DropdownMenuItems: FC<DropdownMenuItemsProps> = ({ user }) => {
  const [modalState, setModalState] = useAtom(authModalState);
  const setCommunityState = useSetAtom(communityState);
  async function logout() {
    await signOut(auth);
    setCommunityState({
      communitySnippets: [],
    });
  }

  return (
    <Transition {...DropdownAnimations}>
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem>
          <div className="flex items-center">
            <MenuItemIcons.profile fontSize={20} className="mr-2" />
            Profile
          </div>
        </MenuItem>
        {user ? (
          <MenuItem>
            <div className="flex items-center">
              <MenuItemIcons.karma fontSize={20} className="mr-2" />
              <div className="flex space-x-2">
                <div>Karma</div>
                <div>{Math.floor(Math.random() * 100)}</div>
              </div>
            </div>
          </MenuItem>
        ) : (
          ""
        )}
        <MenuItem>
          <div
            className="flex items-center w-full"
            onClick={() => {
              if (user) {
                logout();
              } else {
                setModalState({ view: "login", open: true });
              }
            }}
          >
            <MenuItemIcons.logout fontSize={20} className="mr-2" />
            {user ? "Log Out" : "Log In"}
          </div>
        </MenuItem>
      </Menu.Items>
    </Transition>
  );
};

export default DropdownMenuItems;
