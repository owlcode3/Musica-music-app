function Loading({ size }) {
   return (
      <div className="spinner">
         <div>
            <span>
               <img style={{ width: size, height: size }} src="/spinner.svg" alt="" />
            </span>
         </div>
      </div>
   );
}

export default Loading;
