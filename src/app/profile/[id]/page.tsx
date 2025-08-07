interface UserProfileProps {
  params: {
    id: string;
  };
}

export default function UserProfile({ params }: UserProfileProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">User Profile</h1>
        <hr className="mb-4" />
        <p className="text-lg text-gray-700">Profile Page for user ID:</p>
        <p className="text-xl font-mono text-black mt-2">{params.id}</p>
      </div>
    </div>
  );
}
