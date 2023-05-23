import { useEffect, useState } from "react";

export default function Stats() {
  const [transactions, setTransactions] = useState(0);
  const [assets, setAssets] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const transactionInterval = setInterval(() => {
      if (transactions < 52200) {
        setTransactions(transactions + 1_000);
      }
    }, 25);

    const assetInterval = setInterval(() => {
      if (assets < 120000) {
        setAssets(assets + 1_000);
      }
    }, 25);

    const userInterval = setInterval(() => {
      if (users < 46_000) {
        setUsers(users + 1_000);
      }
    }, 25);

    return () => {
      clearInterval(transactionInterval);
      clearInterval(assetInterval);
      clearInterval(userInterval);
    };
  }, [transactions, assets, users]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600 font-satisfy">
              Transactions every 24 hours
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {transactions.toLocaleString()}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600 font-satisfy">
              Assets under holding
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              ${assets.toLocaleString()}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600 font-satisfy">
              New users annually
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {users.toLocaleString()}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
