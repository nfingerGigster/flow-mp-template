# NFT Data Model

**High Level**

* Genies content is released as a sequence of Series. Series can always be referred to by number \(“Series One”\) but might optionally have a name \(“Origin Series”\).
* Within each Series, there are a number of Collections. Collections are referred to by name \(“Shawn Mendes Wonder Collection”\), but have an internal numeric ID that advanced users might be aware of.
* A Collection consists of a number of Asset Lines. Asset Lines are referred to by name \(“The Original by Genies x PAC-MAN”\).
* Each Asset Line contains a series of Assets. The Assets are the individual NFTs, with serial numbers representing their minting order.

### Series

* A monotonically, sequential integer representing a “season” of content.
* Only one Series is active at any time.
* Each Series number could have a name associated with it \(“Origin Series” for Series One, for example\); that name could be on- or off-chain.

### Collections

* A named set of Asset Lines of thematically related content.
* Each Collection will have a unique numeric identifier assigned by the smart contract, but also is required to have a name. The name will be preferred in all UI elements.
* A Collection can also have additional metadata associated with it, either on or off chain: A description, the artist that directed the collection, etc.

### Asset Lines

* A particular piece of content, of which many instances may exist. All Assets within a single Asset Line have the same metadata other than Serial Number and Minting Date.
* An Asset Line is where most of the data and metadata stored: Artist, Copyright, Publisher, etc.

### Asset

* An individual NFT representing a wearable asset \(or avatar?\) within Genies. Each Asset has a reference to it’s Asset Line \(where most of the metadata lives\) and an individual Serial Number and precise Minting Date.
* Asset NFTs live in the user’s account, representing their ownership. By storing most of the data in the Asset Line, we can keep the data storage requirements for each user low, and the data shared between all instances can be stored a single time on-chain.

### Retiring Content

* An Asset Line can be “Retired” at any time. Once an Asset Line is retired, the total edition size is locked and no more Assets from that Asset Line can be minted. Retirement is permanent; the smart contract will not allow a Retired Asset Line to be reopened.
* A Collection can be “Closed” if all Asset Lines within the Collection are Retired. Closing a Collection blocks any additional Asset Lines from being created within that Collection. Closure is permanent; the smart contract will not allow a Closed Collection to be reopened.
* The current Series can be “Advanced” whenever all Collections are Closed. Once the Series is Advanced, and the next Collection to be created will automatically as part of the new Series.

### Royalties

The Flow NFT standard does not currently have a way of representing secondary royalties on-chain, but this is something that we are working on. Since we are committed to creating this standard, and existing project \(such as Top Shot itself!\) will need to be able to adopt this royalty structure after-the-fact, we recommend that the Genies team proceeds without any on-chain mechanism for handling secondary royalties, knowing that whatever mechanism we use for NBATS can apply to their project as well.

### Other Metadata

Any metadata not mentioned above can be implemented either by including a simple string-&gt;string dictionary on-chain, or by tracking metadata off-chain through the NFT’s ID.

In general, we recommend that you restrict on-chain storage to those values that could plausibly be used by a smart contract. For example, you could imagine a smart contract that extends the Genies collectible experience by providing utility to users that can prove they have a Hat type asset that was designed by Gucci. So, having the asset type and designer on-chain makes sense \(especially since those are compact fields\). On the other hand, it’s unlikely that a smart contract would look at the full description of an asset \(“To celebrate PAC-MAN’s 41st birthday…”\), so that data would be better stored off-chain.

Large, presentation-specific data \(such as images, video files, or 3D models\) should almost certainly be stored off-chain.

As with Royalties, the Dapper team is currently investigating the best way to “anchor” off-chain assets to the on-chain NFT securely, using a system such as IPFS or Filecoin.

