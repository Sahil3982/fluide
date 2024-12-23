import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-sm rounded-md">
      {/* User Info */}
      <div className="flex items-center space-x-4 relative">
        {/* Profile Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/96b3/0563/2a657c5c8e813da14d56e06414c434d6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KZ7IKo9Fmr-ZDTKOT2WmWU6ginmii4FdKGCfgfi2Dtzw13-KanG77KxVY4RiaoCWAG0IxH~Vy-SnFx-KaDBgEY-I2oyVq2uTREG0bplFMKAvsKbPDAt1iWy9f~HhY3DOPQIAtj38OtSalBam0Jc9tcKeNYAb75zBGx9uKS-3wec-jKdWpa7TskZsaQsc48pjhqOy-8pnKDLELNXAgmE-vr5~6xmgu7Z9Ze8JjEFP-YmfhfozaBYMdh1EPmfGb6k0LLUtWaJguPt14v80Tl~oivjmtm9cF0qn3dceNecNTyd5DRw4tnkmRnNdNnZIPFPee~d1UkjlV6J3ObgNUuYxnQ__"
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        {/* Name and Email */}
        <div>
          <h1 className="text-lg font-medium text-gray-900">Diana</h1>
          <p className="text-sm text-gray-500">diana@fluidesign.in</p>
        </div>
        {/* Online Status */}
        <div className="absolute bottom-0 left-6 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
      </div>

      {/* Selfie Clock-In Button */}
      <button className="bg-[#0F172A] text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-[#0F172B]">
        Selfie Clock In
      </button>
    </div>
  );
};

export default Navbar;
