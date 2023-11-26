import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Device, DeviceInfo } from "@capacitor/device"; 
import { ContentContainer } from "../components/ContentContainer";
import { Button } from "../components/core/Button";
import { ProjectViewer } from "../components/ProjectViewer";
import { MrRobot  } from 'mr-robot';


const Home = observer(() => {

  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [echoMessage, setEchoMessage] = useState<string>("");

  const handleGetDeviceInfo = async () => {
    const info = await Device.getInfo();
    setDeviceInfo(info);
  };


  const handleClick = async () => {
    const message = await MrRobot.echo({ value : 'test'});
    setEchoMessage(message.value);
  };

  return (
    <>

<div className="mb-4">
        <Button onClick={handleGetDeviceInfo} label="Get Device Info" />
        {deviceInfo && (
          <div>
            <p>Device ID: {deviceInfo.model}</p>
            <p>Operating System: {deviceInfo.operatingSystem}</p>
          </div>
        )}
        {echoMessage && (
          <div>
            <p>Message: {echoMessage}</p>
          </div>
        )}
      </div>
      

      <div className="mb-4">
        <Button onClick={handleClick} label="click" />
      </div>

      <ContentContainer>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tasks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          
          </tbody>
        </table>
      </ContentContainer>

      <ContentContainer>
        <ProjectViewer />
      </ContentContainer>
    </>
  );
});

export { Home };
