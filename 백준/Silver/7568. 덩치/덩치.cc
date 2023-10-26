#include <iostream>
using namespace std;
int bigman(int * w, int * h, int n, int i);

int main(void){
    int n;
    cin>>n;
    int w[n];
    int h[n];

    for(int i=0; i<n; i++){
      cin>>w[i]>>h[i];
    }

    int rank[n];
    for(int i=0; i<n; i++){
      rank[i]=bigman(w,h,n,i)+1;
    }

    for(int i=0; i<n; i++)
    {
      cout<<rank[i]<<' ';
    }

    return 0;
}

int bigman(int * w, int * h, int n, int i){
  int num=0;
  for(int j=0; j<n; j++)
  {
    if(i!=j){
      if(w[i]<w[j])
      {
        if(h[i]<h[j])
          num++;
      }
    }
  }
  return num;
}