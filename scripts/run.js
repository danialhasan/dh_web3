const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); // get owner and randomPerson from signers
    const waveContractFactory = await hre.ethers.getContractFactory(
        "WavePortal"
    );
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let waveCount, waveTxn, addressesWaved;

    // In the javascript file, we need to manually call our smart contract functions.
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.wave(); // txn = transaction
    await waveTxn.wait(); // this usage of await without pointing it to something is interesting.
    // Perhaps it's solely to call the 'wait()' method?

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    addressesWaved = await waveContract.getAddressesWaved();
    // await addressesWaved.wait();
    console.log(addressesWaved);
    waveCount = await waveContract.getTotalWaves(); // function is repeated twice to see if totalWaves changes.
};

// callbacks are cool.
main()
    .then(() => {
        console.log("Contract run!");
        process.exit(0);
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
