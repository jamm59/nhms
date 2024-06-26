import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function ProfileNavigation() {
  const { data: session, status } = useSession();

  const sendID = { id: session?.user?.name };
  /* Sends the ID of the user to backend. */

  const fetcher = (...args) =>
    fetch(
      ...args,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendID),
      },
      { revalidateIfStale: false }
    ).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/userById", fetcher);

  /* Uses the SWR Next hook.  */
  if (data) {
    return (
      <>
        <div className="flex items-center justify-around gap-3 px-3 py-2">
          <Link
            href={"/user"}
            id="Profile"
            className="shadow-none tile hover:shadow-none"
          >
            <Image
              src={data.gender === "F" ? "/icons/woman.png" : "/icons/man.png"}
              width={25}
              height={25}
              alt="Person icon"
              className="ml-2 rounded-[50px]"
            />
            <span className="text-lg shadow-none">
              {data.name + " " + data.surname}
            </span>
          </Link>
          <Link
            href={""}
            id="Logout"
            className="tile bg-secondary"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <Image
              src="/icons/logout.png"
              alt="Logout icon"
              width={20}
              height={20}
            />
            <span>Logout</span>
          </Link>
        </div>
      </>
    );
  }
  return <></>;
}
