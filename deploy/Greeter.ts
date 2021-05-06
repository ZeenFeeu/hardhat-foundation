import { Greeter } from '../typechain';

export default async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const contract: Greeter = await deploy('Greeter', {
    from: deployer,
    args: ['Hello, world!'],
    log: true,
  });
};
