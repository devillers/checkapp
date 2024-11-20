'use client';

const UserPage = () => {
  return (
    <div>
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Dashboard</h2>
      </header>

      <section className="mt-6">
        <h3 className="text-xl font-bold">My Files</h3>
        <p className="text-gray-500">
          Access your files, images, and videos from this dashboard.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <p className="text-lg font-bold">Documents</p>
            <p className="text-sm text-gray-500">15 GB used</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <p className="text-lg font-bold">Images</p>
            <p className="text-sm text-gray-500">8 GB used</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <p className="text-lg font-bold">Videos</p>
            <p className="text-sm text-gray-500">22 GB used</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPage;
