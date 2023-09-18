function threeSum(arr, target) {
// write your code here
	arr.sort();
	let i=0;
	let n=arr.length;
	let diff=Number.MAX_VALUE;
	let ans=0;
	while (i<n) {
		let j=i+1;
		let k=n-1;
		while (j<k) {
			let sum=arr[i]+arr[j]+arr[k];
			if(sum==target)
			{
				return sum;
		    }
			else if(Math.abs(target-sum)<diff)
			{
				diff=Math.abs(target-sum);
				ans=sum;
			}
			if(sum<target)
			{
				j++;
				while (j<n && arr[j]==arr[j-1]) {
					j++;
				}
			}
			else
			{
				k--;
				while (k>=0 && arr[k]==arr[k+1]) {
					k--;
				}
			}
		}
		i++;
	}
	return ans;
}

module.exports = threeSum;
